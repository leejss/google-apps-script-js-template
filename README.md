# Apps Script Starter JS Template

이 프로젝트는 로컬 개발 환경으로 Google Apps Script를 사용하여 개발되었습니다. [clasp](https://github.com/google/clasp)를 사용하여 로컬에서 개발하고 Google Apps Script에 배포할 수 있습니다.

## 개발 환경 설정

### 설치 과정

1. Clasp 전역 설치

   ```bash
   npm install -g @google/clasp
   ```

2. Google Apps Script API 활성화
   - [Google Apps Script API](https://script.google.com/home/usersettings) 페이지를 방문하여 API를 활성화하세요

3. 프로젝트 의존성 설치

   ```bash
   npm install
   ```

4. Google 계정으로 로그인

   ```bash
   npm run login
   # 또는
   clasp login
   ```

5. 기존 Apps Script 프로젝트 복제 또는 새로 만들기

   ```bash
   # 기존 프로젝트 복제
   clasp clone-script "your-script-id-here"
   
   # 또는 새 프로젝트 생성
   npm run create
   # 또는
   clasp create --title "Apps Script" --rootDir ./src
   ```

## 개발 워크플로우

### Google Apps Script에 코드 푸시

변경사항을 Google Apps Script에 업로드하세요:

```bash
npm run push
# 또는
clasp push
```

변경사항을 자동으로 감시하고 푸시하려면:

```bash
clasp push --watch
```

### Google Apps Script 환경에서 테스트

스크립트 편집기를 열어 구현을 테스트하세요:

```bash
npm run open
# 또는
clasp open-script
```

테스트 권장사항:

- 스크립트 편집기에서 ▶️ 버튼을 사용하여 개별 함수를 실행하세요
- 편집기에서 `보기 > 로그`를 통해 실행 로그를 확인하세요
- 사용될 맥락(스프레드시트, 양식 등)에서 스크립트를 테스트하세요
- 모든 기능이 실제 데이터로 예상대로 작동하는지 확인하세요

### 버전 관리 및 배포

테스트를 통해 모든 것이 올바르게 작동함을 확인한 후:

1. 버전을 생성하세요

   ```bash
   clasp create-version "변경 사항 설명"
   ```

2. 버전을 배포하세요

   ```bash
   npm run deploy
   # 또는
   clasp create-deployment --description "프로덕션 배포"
   ```

3. 배포를 확인하세요

   ```bash
   npm run list
   # 또는
   clasp list-deployments
   ```

4. 웹 앱 배포 (선택 사항)
   - 스크립트 편집기에서 `배포 > 새 배포`를 클릭하세요
   - 배포 유형으로 `웹 앱`을 선택하세요
   - 액세스 권한을 구성하고 `배포`를 클릭하세요
   - 웹 앱 접속을 위해 생성된 URL을 저장하세요

## 중요 참고사항

- `.claspignore` 파일은 Apps Script에 푸시해서는 안 되는 파일을 지정합니다
- 계정에 Google Apps Script API가 활성화되어 있는지 확인하세요
- 웹 앱으로 배포할 때 접근 권한을 주의하세요
- 로컬 개발 환경에서 변경 사항을 추적하기 위해 버전 관리(git)를 사용하세요
- 협업을 위해 팀 구성원과 Apps Script 프로젝트 공유를 고려하세요

## 문제 해결

- **권한 문제**: Google Apps Script API를 활성화했는지 확인하세요
- **배포 오류**: `appsscript.json` 구성을 확인하세요
- **런타임 오류**: Apps Script 편집기에서 로그를 검토하세요
- **푸시 실패**: `.claspignore` 파일이 올바르게 구성되어 있는지 확인하세요
- **인증 문제**: `clasp login`을 다시 실행해 보세요

## Secret management

1. PropertiesService 활용
2. GCP Secret Manager 활용

## .clasp.json

```json
{
  "scriptId": "Your Script ID",
  "rootDir": "dist", // bundled output directory. Default is `dist`
  "fileExtension": "js",
  "filePushOrder": [""]
}
```

## 참고 자료

- [Google Apps Script 문서](https://developers.google.com/apps-script)
- [Clasp GitHub 저장소](https://github.com/google/clasp)
- [Apps Script 매니페스트](https://developers.google.com/apps-script/manifest)
