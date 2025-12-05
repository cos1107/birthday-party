// 全域進度管理模組
// 使用 localStorage 儲存遊戲進度

/**
 * 取得目前龍珠數量
 * @returns {number} 龍珠數量（0-7）
 */
function getDragonBallCount() {
  const count = localStorage.getItem('dragonBallCount');
  return count ? parseInt(count, 10) : 0;
}

/**
 * 設定龍珠數量
 * @param {number} count - 龍珠數量
 */
function setDragonBallCount(count) {
  localStorage.setItem('dragonBallCount', count.toString());
}

/**
 * 取得已完成的地點列表
 * @returns {Array<string>} 已完成地點的 key 陣列
 */
function getCompletedLocations() {
  const locations = localStorage.getItem('completedLocations');
  return locations ? JSON.parse(locations) : [];
}

/**
 * 標記某地點為已完成
 * @param {string} locationKey - 地點的唯一識別碼
 * @returns {boolean} 是否為新完成（true=新增，false=已存在）
 */
function markLocationCompleted(locationKey) {
  const completed = getCompletedLocations();

  // 檢查是否已完成
  if (completed.includes(locationKey)) {
    return false; // 已完成，不重複加分
  }

  // 新增至已完成列表
  completed.push(locationKey);
  localStorage.setItem('completedLocations', JSON.stringify(completed));

  // 龍珠數量 +1
  const currentCount = getDragonBallCount();
  setDragonBallCount(currentCount + 1);

  return true; // 新完成
}

/**
 * 重置遊戲進度（清空所有紀錄）
 */
function resetGame() {
  localStorage.removeItem('dragonBallCount');
  localStorage.removeItem('completedLocations');
}
