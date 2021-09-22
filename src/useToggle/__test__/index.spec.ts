import { useToggle } from '../index';

describe('useToggle', () => {
  test('should change state when execute toggle', () => {
    // 执行useToggle方法返回一个数组，数组第一位是一个响应值，toggle是一个方法
    const [state, toggle] = useToggle(false);
    // 期望state.value等于初始化值
    expect(state.value).toBe(false);
    // 执行toggle方法后
    toggle();
    // 期望状态自动取反
    expect(state.value).toBe(true);
  });
});
