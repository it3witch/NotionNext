/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-image: url('/bg1.jpg');
        background-size: cover;       /* 铺满整个页面 */
        background-repeat: no-repeat; /* 不重复 */
        background-attachment: fixed; /* 固定背景，不随滚动移动 */
      }

      body::before {
        content: "";
        position: fixed; /* 全屏遮罩 */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* 黑色半透明，可调0.1~0.7 */
        z-index: -1; /* 保证内容在上层显示 */
      }
      
      .dark body {
        background-color: black;
      }

      // 菜单下划线动画
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#4e80ee, #4e80ee);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: #4e80ee;
      }

      /* 文章主体轻微透明背景（约90%不透明） */
      #theme-next #article-wrapper {
        background-color: rgba(255, 255, 255, 0.9);
      }
      .dark #theme-next #article-wrapper {
        background-color: rgba(17, 17, 17, 0.9);
      }

      /* 文章详情外层容器（含标题/元信息）透明度设置，确保覆盖父级 bg-* 工具类 */
      #theme-next [itemtype='https://schema.org/Movie'] {
        background-color: rgba(255, 255, 255, 0.9) !important;
      }
      .dark #theme-next [itemtype='https://schema.org/Movie'] {
        background-color: rgba(17, 17, 17, 0.9) !important;
      }
    `}</style>
  )
}

export { Style }
