# 디지털 시계



### html에 만들었고 css와 자바 스크립트를 이용해 계산과 홈페이지에 보일 텍스트를 꾸밈.

## 중요코드

## 1. CCS를 이용해서 시간이 나오는 부분과 버튼을 가운데로 맞춰주고 시간이 나올 곳을 검은색 선으로 강조시킴.
![image](https://user-images.githubusercontent.com/102014376/174729661-a0466b7c-ba50-4e6a-8e52-ac41ffec38a3.png)
#### ---------------------------------------------------------------------------
### 시간이 나오는 곳에 윤곽선을 만들어 줌.
![image](https://user-images.githubusercontent.com/102014376/174736081-27957109-0005-40a3-983a-fcdca47dc497.png)



## 2. 자바 스크립트를 사용해 시와 분, 초를 나오게 만듦.
![image](https://user-images.githubusercontent.com/102014376/174729923-5198e0ab-1f1b-436d-9ffb-4fe13acf2073.png)
### DOM을 이용해 time과 go, stop을 변수에 지정해줌.
![image](https://user-images.githubusercontent.com/102014376/174738610-98b45f03-412d-4d97-8ae9-705cd75908b9.png)
## onclick 으로 go 와 stop으로 handleId에 들어갈 값을 지정.
![image](https://user-images.githubusercontent.com/102014376/174738767-0f558a9b-ac85-4fb8-bf4c-0f68f30364e8.png)


## 3. html로 웹에 나올 버튼과 시간이 출력될 블럭을 만들어 줌.
![image](https://user-images.githubusercontent.com/102014376/174730111-c8e32198-c1b3-402d-8253-8289be28cfe5.png)
### div에 CSS로 만든 클래스를 넣어 시간이 나오는 곳을 꾸밈.
![image](https://user-images.githubusercontent.com/102014376/174739279-e902251d-5568-4334-8ebb-5c3a6713f278.png)

### go와 stop버튼을 만듦.
![image](https://user-images.githubusercontent.com/102014376/174739191-f32b9179-742e-460a-9e4b-0c90ded4e231.png)


## 출력
![image](https://user-images.githubusercontent.com/102014376/174737711-3e3ecfbf-4c74-41d0-8236-51e404667cc2.png)
### 아무 버튼도 누르지 않은 기본 상태.

![image](https://user-images.githubusercontent.com/102014376/174737816-de0edb5e-4e59-4154-8c9f-9fd1c0117ee2.png)
### go를 눌렸을 경우 현재 시간이 24시를 기준으로 표시됨.

![image](https://user-images.githubusercontent.com/102014376/174737927-9402c3bd-ad1e-4f27-a22a-3c8be6a48932.png)
### stop을 눌렀을 경우 누른 시간 기준으로 디지털 시계가 멈춤. 

### 다시 GO를 눌렀을 경우에는 전 시간에 영향을 받지 않고 현제 시간을 출력한다.






