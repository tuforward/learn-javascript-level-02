/**                    Tính tổng điểm theo từng lớp
 * YÊU CẦU:
    +   Cho một mảng gồm các học sinh (bao gồm các thông tin: họ tên, lớp, điểm trung bình của học sinh đó). Hãy tính tổng điểm theo từng lớp.
*/

const students = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
];

const totalPointClass = (students) => {
    // Lấy ra danh sách học sinh các lớp
    let getArryClass = students.reduce((classs, student) => {
        if(classs[student.lop]) {
            // nếu đã tồn tại cái lớp này
            classs[student.lop] += student.diem;
        }

        else {
            // nếu chưa tồn tại lớp này từ trước
            classs[student.lop] = student.diem;
        }

        return classs;
    }, {}); // Giá trị khởi tạo ban đầu là 1 object

    return getArryClass;
}


let vidu_01 = totalPointClass(students);

console.log(vidu_01);

/**
const students = [
  { hoTen: "Le Van A", lop: "A", diem: 7.5 },
  { hoTen: "Do Van B", lop: "B", diem: 6.8 },
  { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
  { hoTen: "Dao Van D", lop: "C", diem: 9 },
  { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
  { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
];

    Trả về:
        {
            A: 15.5,
            B: 22.5,
            C: 9
        }

 */