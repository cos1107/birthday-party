# 冷笑話圖片目錄

這個目錄用來存放冷笑話關卡的圖片。

## 目前使用的圖片

| 檔案名稱 | 對應關卡 | 說明 |
|---------|---------|------|
| `antarctica.svg` | 南極洲 | 企鵝相關的冷笑話 |
| `caribbean.svg` | 加勒比海 | 海盜相關的冷笑話 |
| `atlantic.svg` | 大西洋 | 海洋魚類相關的冷笑話 |
| `arctic.svg` | 北極 | 北極熊相關的冷笑話 |
| `mediterranean.svg` | 地中海 | 地中海相關的冷笑話 |

## 如何替換圖片

1. 準備好你的圖片檔案（建議格式：JPG、PNG 或 SVG）
2. 將圖片命名為對應的檔名（例如：`antarctica.jpg`）
3. 將圖片放到這個目錄 `images/jokes/` 中
4. 如果使用不同的副檔名（例如 `.jpg` 或 `.png`），需要修改 `index.html` 中的圖片路徑

## 修改圖片路徑

在 `index.html` 中找到對應的 location 定義，修改 `image` 欄位：

```javascript
// 例如修改南極洲的圖片
{ key: 'antarctica', name: '南極洲', type: 'joke', emoji: '❄️',
  image: 'images/jokes/antarctica.jpg',  // 從 .svg 改為 .jpg
  question: '為什麼企鵝不會飛？',
  answer: '因為牠們太胖了！' }
```

## 建議的圖片規格

- **尺寸**：建議 400x300 像素或更大（比例 4:3）
- **格式**：JPG、PNG、SVG 都可以
- **檔案大小**：建議每張圖片不超過 500KB，以確保載入速度

## 注意事項

- 圖片檔名需與 `index.html` 中定義的路徑一致
- 目前的 SVG 檔案是佔位圖，請替換為實際的圖片
- 替換圖片後不需要修改程式碼（除非改變副檔名）
