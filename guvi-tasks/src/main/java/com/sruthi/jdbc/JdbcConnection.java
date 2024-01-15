package com.sruthi.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcConnection {
    public static void main(String[] args) throws SQLException {

        String url = "jdbc:mysql://localhost3307/w3schools";
        String username = "root";
        String password = "root123";
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3307/w3schools", "root", "root123");
            Statement statement = connection.createStatement();

            String insertQuery = "INSERT INTO employees (empcode, empname, empage, esalary) VALUES " +
                    "('101', 'Jenny', 25, 10000), " +
                    "('102', 'Jacky', 30, 20000), " +
                    "('103', 'Joe', 20, 40000), " +
                    "('104', 'John', 40, 80000), " +
                    "('105', 'Shameer', 25, 90000)";

            int rowsAffected = statement.executeUpdate(insertQuery);
            System.out.println("Rows affected: " + rowsAffected);

            statement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
