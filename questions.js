// ============ CHỈNH CÂU HỎI TẠI ĐÂY ============
// Mỗi câu là 1 khối { ... }, ngăn cách nhau bằng dấu phẩy.
//   q: nội dung câu hỏi
//   a: danh sách đáp án (2 đến 6 đáp án đều được)
//   c: vị trí đáp án ĐÚNG, đếm từ 0  (0 = A, 1 = B, 2 = C, 3 = D)
export const QUESTIONS = [
  { q: "Thủ đô của Nhật Bản là thành phố nào?", a: ["Osaka", "Tokyo", "Kyoto", "Nagoya"], c: 1 },
  { q: "Một tuần có bao nhiêu ngày?", a: ["5", "6", "7", "8"], c: 2 },
  { q: "Hành tinh nào được gọi là Hành tinh Đỏ?", a: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thổ"], c: 1 },
  { q: "Nước nào có hình dáng giống một chiếc ủng?", a: ["Pháp", "Ý", "Đức", "Tây Ban Nha"], c: 1 },
  { q: "2 + 3 × 4 bằng bao nhiêu?", a: ["20", "14", "24", "18"], c: 1 },
  { q: "Loài động vật nào được mệnh danh là 'Vua của rừng xanh'?", a: ["Hổ", "Voi", "Sư tử", "Báo"], c: 2 },
  { q: "Đại dương lớn nhất thế giới là đại dương nào?", a: ["Đại Tây Dương", "Ấn Độ Dương", "Bắc Băng Dương", "Thái Bình Dương"], c: 3 },
  { q: "Một thế kỷ có bao nhiêu năm?", a: ["10", "50", "100", "1000"], c: 2 },
  { q: "Cơ quan nào có chức năng bơm máu đi khắp cơ thể?", a: ["Phổi", "Tim", "Gan", "Thận"], c: 1 },
  { q: "Ai là người đầu tiên đặt chân lên Mặt Trăng?", a: ["Neil Armstrong", "Albert Einstein", "Isaac Newton", "Thomas Edison"], c: 0 },
  { q: "Việt Nam nằm ở châu lục nào?", a: ["Châu Âu", "Châu Á", "Châu Phi", "Châu Mỹ"], c: 1 },
  { q: "Kim loại nào có ký hiệu hóa học là Au?", a: ["Bạc", "Sắt", "Vàng", "Đồng"], c: 2 },
  { q: "Có bao nhiêu hành tinh trong Hệ Mặt Trời?", a: ["7", "8", "9", "10"], c: 1 },
  { q: "Loài vật nào là động vật có vú?", a: ["Cá mập", "Cá voi", "Cá ngừ", "Cá chép"], c: 1 },
  { q: "Núi cao nhất thế giới là núi nào?", a: ["Everest", "Phú Sĩ", "K2", "Fansipan"], c: 0 },
  { q: "Ngôn ngữ lập trình nào thường được sử dụng để tạo tương tác cho website?", a: ["JavaScript", "HTML", "CSS", "SQL"], c: 0 },
  { q: "5 × 6 bằng bao nhiêu?", a: ["25", "30", "35", "40"], c: 1 },
  { q: "Quốc gia nào nổi tiếng với tháp Eiffel?", a: ["Anh", "Pháp", "Ý", "Đức"], c: 1 },
  { q: "Mặt Trời là gì?", a: ["Một hành tinh", "Một ngôi sao", "Một vệ tinh", "Một thiên thạch"], c: 1 },
  { q: "Nước đóng băng ở nhiệt độ bao nhiêu độ C?", a: ["0°C", "10°C", "50°C", "100°C"], c: 0 },
  { q: "Thủ đô của nước Pháp là thành phố nào?", a: ["Rome", "Berlin", "Paris", "Madrid"], c: 2 },
  { q: "Bộ phận nào của cây có chức năng hút nước và muối khoáng?", a: ["Lá", "Thân", "Rễ", "Hoa"], c: 2 },
  { q: "Hình có 3 cạnh được gọi là hình gì?", a: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], c: 2 },
  { q: "Ai được biết đến với thuyết tương đối?", a: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], c: 1 },
  { q: "Thiết bị nào dùng để nhập văn bản vào máy tính?", a: ["Màn hình", "Loa", "Bàn phím", "Máy in"], c: 2 },
];

// ============ CÀI ĐẶT KHÁC ============
export const SECONDS_PER_QUESTION = 15;  // số giây mỗi câu
export const POWERUP_CHANCE = 0.5;       // xác suất nhận vật phẩm khi trả lời đúng (0.5 = 50%)
export const STEAL_PERCENT = 0.10;       // tỉ lệ điểm bị lấy khi dùng "Cướp điểm"
