# Astral
본 프로젝트는 [이미 존재하는 프로젝트](https://html5up.net/astral)를 보고 UI 및 애니메이션을 유추하여 클론 코딩하였습니다.

리액트를 공부하게 되면서 상기시켜야할 만한 부분들을 정리하였습니다.
## Route Transitioning animation
화면과 화면 간에 전환이 진행될 때 애니메이션을 넣는 방법입니다.    
더 자세한 내용은 [참고 사이트](https://baeharam.netlify.app/posts/react/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)에서 확인하시기 바랍니다.
``` javascript
import { TransitionGroup, CSSTransition } from "react-transition-group";
```
``` jsx
<TransitionGroup className="SectionAnimation">
  <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
    <Switch location={location}>
      <Route ... />
      <Route ... />
      <Route ... />
    </Switch>
  </CSSTransition>
</TransitionGroup>
```

# Others
[이전 프로젝트](https://github.com/HanGyeolee/Phantom) 와 거의 유사한 main.css를 사용하여 전반적인 작업 시간을 단축시킬 수 있었습니다.

[Home 페이지](https://github.com/HanGyeolee/Astral/blob/main/src/pages/Home/index.css#L36)에서 Work 화면으로 넘어가는 오른쪽 화살표는 가상선택자 :after를 사용하여 구현하였습니다.

수정을 용이하게 하기 위해 footer와 header를 함수로 만들어 분리하였습니다.

## 문자열 내에 변수 넣기
문자열 내에 변수를 넣으려면 (") 나 (') 외에 (\`) 를 사용해야합니다.    
다음 예제를 통해 설명을 하자면 props.active 가 true 일 때,
```javascript 
<p> `headersvg ${props.active ? "active" : ""}` </p> 
```
의 결과는 ``headersvg active`` 가 되고,    

```javascript
<p> 'headersvg ${props.active ? "active" : ""}' </p> 
```
의 결과는 ``headersvg ${props.active ? "active" : ""}`` 가 됩니다.

## ES6 문법
[App](https://github.com/HanGyeolee/Astral/blob/main/src/App.js#L71) 변수 내에서 다음과 같이 state를 할당하고 header를 호출하였습니다.
``` jsx
const App = () => {
  ...
  const [headersvgs, setSvgs] = useState([
      {
        id: 0,
        click: () => Move("/", 0),
        type: "home",
        active: true
      },
      {
        id: 1,
        click: () => Move("/work", 1),
        type: "work",
        active: false
      },
      {
        id: 2,
        click: () => Move("/contact", 2),
        type: "contact",
        active: false
      },
      {
        id: 3,
        click: () => Move("/", 3),
        type: "twitter",
        active: false
      }
    ]);
  return (
    ...
      <Header svgs={headersvgs}/>
    ...
  );
}
```
[Header](https://github.com/HanGyeolee/Astral/blob/main/src/App.js#L48) 함수에서 매개변수 props 의 svgs 가 배열로 넘어오므로 반복기를 이용해 간결하게 구현하였습니다.
``` jsx
function Header(props){
  return(
    ...
        {props.svgs.map(headersvg => (
          <li><Headersvg click={headersvg.click} type={headersvg.type} active={headersvg.active}></Headersvg></li>
        ))}
    ...
  );
}
```
[Headersvg](https://github.com/HanGyeolee/Astral/blob/main/src/App.js#L13) 는 받아온 배열들 내의 데이터를 이용해 자동으로 이미지를 그려나가게 하는 함수입니다.
