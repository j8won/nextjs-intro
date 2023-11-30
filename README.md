# 노마드코더 nextjs 시작하기
노마드코더의 강의 nextjs 시작하기를 기반으로 14 버전의 nextjs 학습

- [노마드코더 강의](https://nomadcoders.co/nextjs-fundamentals/lobby)
- [Learn Nextjs](https://nextjs.org/learn)

## 라우터
- Nested routing
  Next.js는 폴더가 중첩 경로를 만드는 데 사용되는 파일 시스템 라우팅을 사용합니다. 각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타냅니다.

<img alt="router" src="https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard-route.png&w=1920&q=75&dpl=dpl_DiW2ecigo2JKHD1ioFP2oTFMkZS8">

## Navigating Between Pages
### `<Link href="/" />`

탐색 환경을 개선하기 위해 Next.js는 경로 세그먼트별로 애플리케이션을 자동으로 코드 분할합니다. 이는 브라우저가 초기 로드 시 모든 애플리케이션 코드를 로드하는 기존 React SPA와는 다릅니다.

경로별로 코드를 분할한다는 것은 페이지가 격리된다는 것을 의미합니다. 특정 페이지에서 오류가 발생해도 나머지 애플리케이션은 계속 작동합니다.

또한 프로덕션 환경에서 `<Link />` 컴포넌트가 브라우저의 뷰포트에 표시될 때마다 Next.js는 백그라운드에서 링크된 경로에 대한 코드를 자동으로 prefetch합니다. 
사용자가 링크를 클릭할 때쯤이면 대상 페이지의 코드가 이미 백그라운드에서 로드되어 있으므로 페이지 전환이 거의 즉각적으로 이루어집니다!

### `usePathname()`
`usePathname()`은 현재 URL의 경로명을 읽을 수 있는 클라이언트 컴포넌트 훅입니다.

클라이언트 컴포넌트 훅을 사용하기 위해선 클라이언트 컴포넌트로 바꿔야 합니다. 
파일 맨 위에 React의 "use client" 지시문을 추가한 다음, next/navigation에서 `usePathname()`을 가져옵니다.

- [How Routing and Navigation Works](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)

## CSS modules
CSS 모듈을 사용하면 고유한 클래스 이름을 자동으로 생성하여 컴포넌트에 CSS의 범위를 지정할 수 있으므로 스타일 충돌에 대해 걱정할 필요가 없습니다.
```js
import styles from "@/app/components/NavBar.module.css";

<Link
  href={"/"}
  className={[styles.link, pathname === "/" && styles.active].join(" ")}
>
  Home
</Link>
```
## Layout
Next.js에서는 특별한 layout.jsx 파일을 사용하여 여러 페이지 간에 공유되는 UI를 만들 수 있습니다. 

```js
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

Next.js에서 레이아웃을 사용하면 탐색 시 페이지 컴포넌트만 업데이트되고 레이아웃은 다시 렌더링되지 않는다는 이점이 있습니다. 이를 부분 렌더링이라고 합니다

<img alt="layout" src="https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fpartial-rendering-dashboard.png&w=1920&q=75&dpl=dpl_DiW2ecigo2JKHD1ioFP2oTFMkZS8">
