# Sample Server
POST 한 데이터를 출력하는 웹애플리케이션


## 모니터링 URL
```
GET http://IP
```


## 데이터 업로드 URL
```
POST http://IP/api/data
```


### Example

1. Linux
```
$ curl -d "my text data, or any plaint text" http://IP/api/data
```

2. Web browser
```js
// 1. 크롬 개발자 도구 켜기(F12)
// 2. ESC 눌러서 console 에서 이하 코드 작성
// 3.
> client = new XMLHttpRequest()
> client.open('POST', "URL", true)
> client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
> client.send("my text data, or any plaint text");
```