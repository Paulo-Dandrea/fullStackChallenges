with open("arquivo.txt", "r") as file:
    lines = file.readlines()
    approveds = []
    for line in lines:
        student_name = line.split()[0]
        student_grade = int(line.split()[1])

        if student_grade >= 6:
            approveds.append(student_name)

    with open("aproved_students.txt", "w") as approved_file:
        for approved in approveds:
            approved_file.write(f'{approved}\n')
