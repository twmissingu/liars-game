/**
 * =============================================================================
 * 角色轮替系统演示组件
 * =============================================================================
 *
 * 展示角色轮替系统的功能：
 * - 角色顺序显示
 * - 当前激活角色高亮
 * - 手动切换控制
 * - 状态显示
 * - 轮替历史
 *
 * @author Code Agent
 * @version 1.0.0
 */

import React, { useState, useCallback } from 'react';
import { useTurnOrder } from '../hooks/useTurnOrder';
import { RoleSlot } from '../core/TurnOrderSystem';

// ============================================
// 样式定义
// ============================================

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#555',
  },
  roleList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  roleCard: {
    padding: '15px 20px',
    borderRadius: '10px',
    border: '2px solid #ddd',
    textAlign: 'center',
    minWidth: '100px',
    transition: 'all 0.3s ease',
  },
  roleCardActive: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    transform: 'scale(1.05)',
  },
  roleCardInactive: {
    opacity: 0.5,
    backgroundColor: '#f5f5f5',
  },
  roleIndex: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '5px',
  },
  roleName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  roleStatus: {
    fontSize: '12px',
    marginTop: '5px',
  },
  statusActive: {
    color: '#4CAF50',
  },
  statusInactive: {
    color: '#999',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
  },
  buttonPrimary: {
    backgroundColor: '#2196F3',
    color: 'white',
  },
  buttonSecondary: {
    backgroundColor: '#757575',
    color: 'white',
  },
  buttonSuccess: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  buttonDanger: {
    backgroundColor: '#f44336',
    color: 'white',
  },
  buttonWarning: {
    backgroundColor: '#FF9800',
    color: 'white',
  },
  infoPanel: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#666',
  },
  infoValue: {
    color: '#333',
  },
  historyPanel: {
    backgroundColor: '#fafafa',
    padding: '15px',
    borderRadius: '8px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  historyItem: {
    padding: '5px 0',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    color: '#666',
  },
  arrow: {
    fontSize: '24px',
    color: '#999',
  },
  directionIndicator: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '16px',
    color: '#666',
  },
};

// ============================================
// 角色卡片组件
// ============================================

interface RoleCardProps {
  slot: RoleSlot;
  isActive: boolean;
  onToggleActive: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ slot, isActive, onToggleActive }) => {
  const cardStyle: React.CSSProperties = {
    ...styles.roleCard,
    ...(isActive ? styles.roleCardActive : {}),
    ...(!slot.isActive ? styles.roleCardInactive : {}),
  };

  return (
    <div style={cardStyle} onClick={onToggleActive}>
      <div style={styles.roleIndex}>[{slot.index}]</div>
      <div style={styles.roleName}>{slot.name}</div>
      <div style={styles.roleStatus}>
        {slot.isActive ? (
          <span style={styles.statusActive}>● 活跃</span>
        ) : (
          <span style={styles.statusInactive}>○ 非活跃</span>
        )}
      </div>
    </div>
  );
};

// ============================================
// 主组件
// ============================================

export const TurnOrderDemo: React.FC = () => {
  // 使用轮替系统Hook
  const {
    currentSlot,
    currentIndex,
    allSlots,
    state,
    direction,
    isPaused,
    next,
    goto,
    pause,
    resume,
    reset,
    setActive,
    toggleDirection,
    getPreview,
    getOrderDescription,
    isCompleteRound,
    getActiveCount,
  } = useTurnOrder({
    startIndex: 0,
    direction: 'clockwise',
  });

  // 本地状态
  const [autoRotate, setAutoRotate] = useState(false);

  // 处理角色点击（切换活跃状态）
  const handleRoleClick = useCallback(
    (index: number) => {
      const slot = allSlots[index];
      setActive(index, !slot.isActive);
    },
    [allSlots, setActive]
  );

  // 自动轮替
  React.useEffect(() => {
    if (!autoRotate || isPaused) return;

    const timer = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(timer);
  }, [autoRotate, isPaused, next]);

  // 获取预览
  const preview = getPreview(4);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>角色轮替系统演示</h1>

      {/* 方向指示器 */}
      <div style={styles.directionIndicator}>
        轮替方向: {direction === 'clockwise' ? '顺时针 ↻' : '逆时针 ↺'}
        {isPaused && ' (已暂停)'}
        {isCompleteRound() && ' - 已完成一轮!'}
      </div>

      {/* 角色列表 */}
      <div style={styles.roleList}>
        {allSlots.map((slot, index) => (
          <React.Fragment key={slot.id}>
            <RoleCard
              slot={slot}
              isActive={index === currentIndex}
              onToggleActive={() => handleRoleClick(index)}
            />
            {index < allSlots.length - 1 && (
              <span style={styles.arrow}>
                {direction === 'clockwise' ? '→' : '←'}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 控制按钮 */}
      <div style={styles.controls}>
        <button
          style={{ ...styles.button, ...styles.buttonPrimary }}
          onClick={next}
          disabled={isPaused}
        >
          下一个角色
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonWarning }}
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? '停止自动' : '自动轮替'}
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={toggleDirection}
        >
          切换方向
        </button>
        {isPaused ? (
          <button
            style={{ ...styles.button, ...styles.buttonSuccess }}
            onClick={resume}
          >
            恢复
          </button>
        ) : (
          <button
            style={{ ...styles.button, ...styles.buttonSecondary }}
            onClick={pause}
          >
            暂停
          </button>
        )}
        <button
          style={{ ...styles.button, ...styles.buttonDanger }}
          onClick={() => reset(0)}
        >
          重置
        </button>
      </div>

      {/* 快速跳转按钮 */}
      <div style={styles.controls}>
        <span style={{ ...styles.infoLabel, marginRight: '10px' }}>跳转到:</span>
        {allSlots.map((slot, index) => (
          <button
            key={slot.id}
            style={{
              ...styles.button,
              ...styles.buttonSecondary,
              opacity: index === currentIndex ? 0.5 : 1,
            }}
            onClick={() => goto(index)}
            disabled={index === currentIndex}
          >
            {slot.name}
          </button>
        ))}
      </div>

      {/* 信息面板 */}
      <div style={styles.infoPanel}>
        <h3 style={styles.subtitle}>当前状态</h3>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>当前角色:</span>
          <span style={styles.infoValue}>
            [{currentIndex}] {currentSlot.name}
          </span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>轮替次数:</span>
          <span style={styles.infoValue}>{state.rotationCount}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>活跃角色数:</span>
          <span style={styles.infoValue}>
            {getActiveCount()} / {allSlots.length}
          </span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>轮替顺序:</span>
          <span style={styles.infoValue}>{getOrderDescription()}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>即将轮到:</span>
          <span style={styles.infoValue}>{preview.join(' → ')}</span>
        </div>
      </div>

      {/* 历史记录 */}
      <div style={styles.historyPanel}>
        <h3 style={styles.subtitle}>轮替历史</h3>
        {state.history.length === 0 ? (
          <div style={{ color: '#999', fontStyle: 'italic' }}>暂无轮替记录</div>
        ) : (
          state.history.map((record, index) => (
            <div key={index} style={styles.historyItem}>
              {index + 1}. {record}
            </div>
          ))
        )}
      </div>

      {/* 使用说明 */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#E3F2FD',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#1565C0',
        }}
      >
        <strong>使用说明:</strong>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>点击角色卡片可切换其活跃/非活跃状态</li>
          <li>非活跃角色会被自动跳过</li>
          <li>当前激活角色会有绿色高亮边框</li>
          <li>使用"自动轮替"可开启2秒间隔的自动切换</li>
        </ul>
      </div>
    </div>
  );
};

export default TurnOrderDemo;
