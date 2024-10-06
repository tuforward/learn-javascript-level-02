/**                 Nhóm các học sinh trong một lớp theo giới tính
 * YÊU CẦU:
    +   Cho một mảng danh sách các học sinh của một lớp. Hãy nhóm các học sinh Nam thành 1 nhóm, học sinh Nữ thành 1 nhóm.
*/

function groupStudents (arr) {
    let boyStudents  = [];
    let girlStudents = [];

    arr.forEach(student => {
        if(student.gioiTinh === "Nam") boyStudents.push(student.hoTen);
        else girlStudents.push(student.hoTen);
    })

    return {
        "Nam": boyStudents,
        "Nữ": girlStudents
    };
}

const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
];

let vidu_01 = groupStudents(students);
console.log(vidu_01);
/**
const students = [
  { hoTen: "Le Van A", gioiTinh: "Nam" },
  { hoTen: "Do Van B", gioiTinh: "Nam" },
  { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
  { hoTen: "Dao Van D", gioiTinh: "Nam" },
  { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
  { hoTen: "Vu Van F", gioiTinh: "Nam" },
];

Trả về:
{
  "Nam": [
      "Le Van A",
      "Do Van B",
      "Dao Van D",
      "Vu Van F"
  ],
  "Nu": [
      "Nguyen Thi C",
      "Hoang Thi E"
  ]
}
*/

//  ---------------------- CÁCH 2 ------------------------------//
const studentss = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
];
  
  const groupedStudents = studentss.reduce((groups, item) => {
    if (groups[item.gioiTinh]) { // Mỗi vòng lặp kiểm tra xem trong object khởi tạo ban đầu có key là Nam hay Nữ chưa
      groups[item.gioiTinh].push(item.hoTen); // Nếu có rồi thì thêm họ tên vào key tương ứng
    } 
    else {
      groups[item.gioiTinh] = [item.hoTen]; // Nếu chưa có tạo ra key là Nam hoặc Nữ, giá trị là một mảng
    }
    return groups;
}, {}); // Giá trị khởi tạo ban đầu là 1 object
  
console.log(groupedStudents);
  
  /*
  Ví dụ object ban đầu là {}
  Sau khi lặp qua item thứ nhất trong mảng students
  - Nếu chưa có key Nam trong {} thì sẽ rơi vào else và add thêm key Nam và gán giá trị cho nó { Nam: ["Le Van A"] }
  - Nếu đã có key Nam trong {} thì sẽ rơi vào trong if và push thêm giá trị vào key Nam { Nam: ["Le Van A", "Do Van B"] }
  - Nếu chưa có key Nu trong {} thì sẽ rơi vào else và add thêm key Nu và gán giá trị cho nó { Nam: ["Le Van A", "Do Van B"], Nu: ["Nguyen Thi C"] }
  - Nếu đã có key Nu trong {} thì sẽ rơi vào trong if và push thêm giá trị vào key Nu { Nam: ["Le Van A", "Do Van B", "Dao Van D"], Nu: ["Nguyen Thi C", "Hoang Thi E"] }
  */