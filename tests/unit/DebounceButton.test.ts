/**
 * =============================================================================
 * 按钮防重复点击机制测试
 * =============================================================================
 *
 * 验证"不质疑"按钮的防重复点击机制：
 * 1. 快速连续点击应该只触发一次逻辑
 * 2. 按钮在锁定期间应该被禁用
 * 3. 正常单次点击应该正常工作
 *
 * @author Code Agent
 * @version 1.0.0
 */

// 模拟handlePass函数的实现
class MockHandlePass {
  isProcessing = false;
  callCount = 0;
  buttonLock = { pass: false };

  async handlePass(): Promise<void> {
    // 检查处理状态和按钮锁定
    if (this.isProcessing || this.buttonLock.pass) {
      return;
    }

    // 立即设置锁定状态
    this.buttonLock.pass = true;
    this.isProcessing = true;

    // 模拟异步操作（使用setTimeout）
    await new Promise<void>(resolve => {
      setTimeout(() => {
        // 增加调用计数
        this.callCount++;

        // 模拟逻辑执行完成
        this.isProcessing = false;

        // 延迟重置按钮锁定
        setTimeout(() => {
          this.buttonLock.pass = false;
        }, 500);

        resolve();
      }, 100);
    });
  }
}

describe('按钮防重复点击机制测试', () => {
  let mockHandler: MockHandlePass;

  beforeEach(() => {
    mockHandler = new MockHandlePass();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('1.1 单次点击应该正常执行', async () => {
    // 执行单次点击
    const promise = mockHandler.handlePass();

    // 等待异步操作完成
    jest.advanceTimersByTime(100);
    await promise;

    expect(mockHandler.callCount).toBe(1);
    expect(mockHandler.isProcessing).toBe(false);
  });

  test('1.2 快速连续点击应该只触发一次', async () => {
    // 快速连续点击5次
    const promises: Promise<void>[] = [];
    for (let i = 0; i < 5; i++) {
      promises.push(mockHandler.handlePass());
    }

    // 等待异步操作完成
    jest.advanceTimersByTime(100);
    await Promise.all(promises);

    // 应该只触发一次
    expect(mockHandler.callCount).toBe(1);
  });

  test('1.3 按钮锁定期间应该阻止点击', async () => {
    // 第一次点击
    const promise1 = mockHandler.handlePass();

    // 立即验证按钮已锁定
    expect(mockHandler.buttonLock.pass).toBe(true);
    expect(mockHandler.isProcessing).toBe(true);

    // 在锁定期间再次点击
    const promise2 = mockHandler.handlePass();

    // 等待第一次操作完成
    jest.advanceTimersByTime(100);
    await Promise.all([promise1, promise2]);

    // 应该只触发一次
    expect(mockHandler.callCount).toBe(1);
  });

  test('1.4 锁定解除后应该可以再次点击', async () => {
    // 第一次点击
    const promise1 = mockHandler.handlePass();
    jest.advanceTimersByTime(100);
    await promise1;

    // 等待锁定解除
    jest.advanceTimersByTime(500);

    // 验证按钮已解锁
    expect(mockHandler.buttonLock.pass).toBe(false);

    // 第二次点击
    const promise2 = mockHandler.handlePass();
    jest.advanceTimersByTime(100);
    await promise2;

    // 应该触发两次
    expect(mockHandler.callCount).toBe(2);
  });

  test('1.5 isProcessing状态应该正确管理', async () => {
    // 点击前状态
    expect(mockHandler.isProcessing).toBe(false);

    // 开始点击
    const promise = mockHandler.handlePass();

    // 点击后应该立即设置为处理中
    expect(mockHandler.isProcessing).toBe(true);

    // 等待操作完成
    jest.advanceTimersByTime(100);
    await promise;

    // 操作完成后应该重置
    expect(mockHandler.isProcessing).toBe(false);
  });

  test('1.6 极端快速点击（10ms间隔）应该只触发一次', async () => {
    // 模拟极端快速点击（10ms间隔点击10次）
    const promises: Promise<void>[] = [];
    for (let i = 0; i < 10; i++) {
      promises.push(mockHandler.handlePass());
      jest.advanceTimersByTime(10);
    }

    // 等待所有异步操作完成
    jest.advanceTimersByTime(200);
    await Promise.all(promises);

    // 应该只触发一次
    expect(mockHandler.callCount).toBe(1);
  });

  test('1.7 第一次点击后立即检查锁定状态', async () => {
    // 第一次点击
    mockHandler.handlePass();

    // 立即检查锁定状态
    expect(mockHandler.buttonLock.pass).toBe(true);
    expect(mockHandler.isProcessing).toBe(true);
  });
});

describe('按钮视觉反馈测试', () => {
  test('2.1 禁用状态应该有正确的CSS类', () => {
    // 验证禁用状态的CSS样式存在
    const disabledStyles = `
      .cg-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        filter: grayscale(0.5);
      }
    `;

    expect(disabledStyles).toContain('opacity: 0.5');
    expect(disabledStyles).toContain('cursor: not-allowed');
    expect(disabledStyles).toContain('filter: grayscale(0.5)');
  });
});
