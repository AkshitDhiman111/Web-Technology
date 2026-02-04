<?<php
if (file_exists(student.txt)) {
    rename("student_copy.txt", "student_)renamed.txt");

    echo"File copied and renamed successfully";
}else {
    echo "student.txt file is not found";
}
?>