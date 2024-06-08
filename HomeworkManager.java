import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class HomeworkManager {
    private HashMap<String, ArrayList<Assignment>> assignments = new HashMap<>();
    private Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        HomeworkManager manager = new HomeworkManager();
    }
  


    private void createSubject() {
        System.out.print("Enter the name of the new subject: ");
        String subjectName = scanner.nextLine();
        if (assignments.containsKey(subjectName)) {
            System.out.println("A subject with this name already exists.");
        } else {
            assignments.put(subjectName, new ArrayList<>());
            System.out.println("Subject '" + subjectName + "' created.");
        }
    }

    private void addAssignment() {
        System.out.print("Enter the name of the subject to add an assignment to: ");
        String subjectName = scanner.nextLine();
        if (assignments.containsKey(subjectName)) {
            System.out.print("Enter the assignment name: ");
            String assignmentName = scanner.nextLine();
            System.out.print("Enter the due date (YYYY-MM-DD): ");
            String dueDateStr = scanner.nextLine();
            LocalDate dueDate = LocalDate.parse(dueDateStr);
            assignments.get(subjectName).add(new Assignment(assignmentName, dueDate));
            System.out.println("Assignment '" + assignmentName + "' added to subject '" + subjectName + "' with due date " + dueDate + ".");
        } else {
            System.out.println("No subject found with the name '" + subjectName + "'.");
        }
    }

    private void removeAssignment() {
        System.out.print("Enter the name of the subject to remove an assignment from: ");
        String subjectName = scanner.nextLine();
        if (assignments.containsKey(subjectName)) {
            ArrayList<Assignment> subjectAssignments = assignments.get(subjectName);
            if (subjectAssignments.isEmpty()) {
                System.out.println("No assignments found for the subject '" + subjectName + "'.");
                return;
            }
            System.out.println("Assignments for subject '" + subjectName + "':");
            for (int i = 0; i < subjectAssignments.size(); i++) {
                System.out.println((i + 1) + ". " + subjectAssignments.get(i));
            }
            System.out.print("Enter the number of the assignment to remove: ");
            int assignmentIndex = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            if (assignmentIndex > 0 && assignmentIndex <= subjectAssignments.size()) {
                Assignment removed = subjectAssignments.remove(assignmentIndex - 1);
                System.out.println("Assignment '" + removed.getName() + "' removed from subject '" + subjectName + "'.");
            } else {
                System.out.println("Invalid assignment number.");
            }
        } else {
            System.out.println("No subject found with the name '" + subjectName + "'.");
        }
    }

    private void viewAssignments() {
        if (assignments.isEmpty()) {
            System.out.println("No subjects or assignments available.");
        } else {
            for (String subjectName : assignments.keySet()) {
                System.out.println("\nSubject: " + subjectName);
                ArrayList<Assignment> subjectAssignments = assignments.get(subjectName);
                for (Assignment assignment : subjectAssignments) {
                    System.out.println(" - " + assignment);
                }
            }
        }
    }
}

class Assignment {
    private String name;
    private LocalDate dueDate;

    public Assignment(String name, LocalDate dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }

    public String getName() {
        return name;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    @Override
    public String toString() {
        return name + " (Due: " + dueDate + ")";
    }
}
