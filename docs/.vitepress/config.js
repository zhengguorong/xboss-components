module.exports = {
  title: 'xboss组件库文档',
  themeConfig: {
    sidebar: {
      '/': getComponentSidebar()
    }
  }
};

function getComponentSidebar() {
  return [
    {
      text: '教程',
      children: [{ text: '安装', link: '/' }]
    },
    {
      text: '组件',
      children: [{ text: 'ToggleButton', link: '/components/toggle-button' }]
    }
  ];
}
