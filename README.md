# 🦆 Đua vịt trắc nghiệm

Game trắc nghiệm có đường đua vịt: ai trả lời đúng và nhanh thì vịt bơi trước. Vị trí các vịt cập nhật trực tiếp cho mọi người chơi.

## Cấu trúc
- `index.html`: giao diện và logic game
- `questions.js`: câu hỏi và thời gian mỗi câu
- `config.js`: cấu hình Firebase và tên phòng

## Cách đổi câu hỏi
Mở file `questions.js`, mỗi câu hỏi là một dòng như sau:

    { q: "Nội dung câu hỏi?", a: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], c: 2 },

- `q`: câu hỏi. `a`: các đáp án. `c`: vị trí đáp án đúng, đếm từ 0 (0 = A, 1 = B, 2 = C, 3 = D).
- Thêm câu: chép nguyên một dòng, dán xuống dưới, nhớ giữ dấu phẩy cuối dòng. Xóa câu: xóa cả dòng.
- Đổi nội dung có dấu nháy kép bên trong thì viết `\"` hoặc dùng nháy đơn `'`.
- Sửa ngay trên GitHub: mở file → biểu tượng cây bút ✏️ → sửa → **Commit changes**. Khoảng 1 phút sau link GitHub Pages tự cập nhật (bấm Ctrl+F5 để tải lại).

## Vật phẩm may mắn
Khi trả lời đúng, người chơi có xác suất `POWERUP_CHANCE` (mặc định 50%) nhận ngẫu nhiên một vật phẩm:
- ⚡ Nhân đôi điểm: câu kế tiếp được x2 (chỉ khi trả lời đúng).
- 🏴‍☠️ Cướp điểm: chọn một người và lấy `STEAL_PERCENT` (mặc định 10%) điểm của họ. Nạn nhân sẽ thấy thông báo.
- 🛡️ Khiên: chặn 1 lần bị cướp, dùng xong là mất.
Chỉnh các tỉ lệ này trong cuối file `questions.js`.

## Chạy thử (chế độ DEMO)
Game dùng ES module nên không mở trực tiếp bằng file được. Chạy server tĩnh:

    npx serve .        # hoặc: python3 -m http.server

Khi chưa cấu hình Firebase, game chạy DEMO với vịt máy.

## Bật bảng xếp hạng nhiều người (Firebase, miễn phí)
1. Vào https://console.firebase.google.com, tạo project mới.
2. Vào **Build → Realtime Database → Create Database**, chọn khu vực gần bạn (ví dụ Singapore).
3. Tab **Rules**, dán nội dung sau rồi Publish:

        {
          "rules": {
            "rooms": {
              "$room": {
                "players": {
                  ".read": true,
                  "$pid": {
                    ".write": true,
                    ".validate": "newData.hasChildren(['name','score','at']) && newData.child('name').isString() && newData.child('name').val().length <= 16 && newData.child('score').isNumber() && newData.child('score').val() <= 20000"
                  }
                }
              }
            }
          }
        }

4. **Project settings → Your apps → Web (</>)**, đăng ký app và copy `firebaseConfig` vào `config.js` (nhớ có `databaseURL`).
5. Đổi `ROOM` trong `config.js` cho mỗi buổi thuyết trình. Số `20000` là điểm tối đa cho phép, đủ rộng vì có vật phẩm nhân đôi và cướp điểm.

Lưu ý: luật trên cho phép ai có link đều ghi được, phù hợp game vui trong buổi thuyết trình. Không dùng cho thi cử nghiêm túc.

## Đưa lên GitHub Pages
1. Tạo repo, đẩy toàn bộ file lên nhánh `main`.
2. **Settings → Pages → Deploy from a branch → main / (root)**.
3. Link game: `https://<tên-github>.github.io/<tên-repo>/`

## Màn hình trình chiếu
Mở `.../index.html?host=1` để chiếu đường đua cỡ lớn, không hiện phần trả lời. Gửi link thường cho người nghe.
