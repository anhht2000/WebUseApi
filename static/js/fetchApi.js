// sử lý bất đồng bộ thay thế cho promises
// thông thường thì khi dùng callback return về promise phải đợi máy chỉ phản hồi lại nhưng dùng await sẽ đợi đến khi máy chủ
// phản hồi lại thì mới chạy tiếp(nghĩa là kết thúc) và trả về kết quả
// Promise(funtion(resolve,reject))
//Fetch trả về một promise, promise sẽ được resolves, giá trị trả về sẽ được gán vào response
fetchRequest = async (url) => {
    const response = await fetch(url)
    return response.json()
}