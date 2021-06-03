# Xmoji

![npm-download-badge](https://img.shields.io/node/v/xquare-gitmoji-cli) [![npm version](https://badge.fury.io/js/%40xquare%2Fxmoji.svg)](https://badge.fury.io/js/%40xquare%2Fxmoji)

## Xmoji?

[XQUARE 커밋 메세지의 형식](https://github.com/team-xquare/README.md)에 맞게 작성하는 것을 도와주는 cli입니다.

기존의 [carloscuesta/gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) 의 코드에서 필요한 부분을 추가하고 필요없는 부분(commit hook)을 제거하여 간소화 하였습니다.



이모지를 찾아 붙여넣기 혹은 직접 기입하는 불편한 점을 개선하기 위해 만들어졌습니다.

## 설치 방법
### By using npm

```
npm install -g @xquare/xmoji
```

### By using brew
```
brew tap smoothbear/cli
brew install smoothbear/cli/xmoji
```

## 사용 방법

### ```xmoji -c``` or ```xmoji --commit```

Commit message를 작성합니다.

* 이모지 선택(필수)
* 이슈 번호 입력(선택)
* 도메인 이름 입력(선택)
* Commit 제목 입력(필수)
* Commit 메세지(description) 입력(선택)

순으로 진행되며, 모두 입력을 하면 자동으로 commit을 합니다.



------------------------------------------------

### ```xmoji -g``` or ```xmoji --config```

gitmoji를 설정합니다.

* ```git add .``` 자동 실행
* commit 할 때의 이모지 형태 설정(emoji code/emoji)
* GPG Signed Commit 활성/비활성
* [Scope](https://www.conventionalcommits.org/en/v1.0.0/#summary) 활성화 / 비활성화

------------------------------------------------

### ```xmoji -l``` or ```xmoji --list```
현재 gitmoji로 사용할 수 있는 이모지 리스트를 봅니다.



------------------------------------------------

### ```xmoji -s``` or ```xmoji --search```

현재 gitmoji로 사용할 수 있는 이모지 리스트에서 원하는 이모지를 찾습니다.



------------------------------------------------

### ```xmoji -u``` or ```xmoji --update```

Gitmoji server에서 이모지 리스트를 받아 새로 고침을 진행합니다.



------------------------------------------------

### ```xmoji -v``` or ```xmoji --version```

현재 설치되어 있는 gitmoji version을 봅니다.
