import * as esbuild from "esbuild";
import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { config } from "dotenv";

config();

function getConfig() {
	return {
		entryPoint: process.env.ENTRY_POINT,
		outFile: process.env.OUT_FILE,
	};
}

async function build() {
	try {
		// 출력 디렉토리 확인 또는 생성
		if (!existsSync("dist")) {
			mkdirSync("dist", { recursive: true });
		}

		const { entryPoint, outFile } = getConfig();
		console.log(`Building ${entryPoint} to ${outFile}...`);

		await esbuild.build({
			entryPoints: [entryPoint], // 엔트리 포인트
			bundle: true, // 모듈을 하나로 번들링
			outfile: outFile, // 출력 파일
			format: "esm", // 여기서 esm으로 설정 (일단 번들링만)
			target: "es2019", // Apps Script 호환 타겟
			minify: false, // 필요에 따라 활성화
			platform: "neutral", // 중립적 플랫폼 설정
			splitting: false, // 코드 분할 비활성화
			write: true, // 파일 시스템에 쓰기
			treeShaking: false, // Bundle even if not used
		});

		if (existsSync("appsscript.json")) {
			copyFileSync("appsscript.json", "dist/appsscript.json");
			console.log("Copied appsscript.json to dist/");
		} else {
			console.error("Build Failed: appsscript.json not found");
			process.exit(1);
		}

		// Copy HTML files
		const htmlFiles = readdirSync("src").filter((file) =>
			file.endsWith(".html"),
		);

		for (const file of htmlFiles) {
			copyFileSync(`src/${file}`, `dist/${file}`);
			console.log(`Copied ${file} to dist/`);
		}
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	}
}

build();
