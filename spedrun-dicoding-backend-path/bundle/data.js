"use strict";
const employees = [
    {
        name: "Fulan",
        email: "fulan@dicoding.com",
        joinYear: 2020,
    },
];
function addEmployee(name, email, joinYear) {
    const newemployees = {
        name,
        email,
        joinYear,
    };
    employees.push(newemployees);
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
}
addEmployee("hanif", "hanifanggara1@", 2002);
console.log(employees);
