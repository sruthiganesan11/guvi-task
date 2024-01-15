package com.sruthi.jdbc;

import java.sql.*;

public class DbConnector {
    public static void main(String[] args) throws SQLException {
        String query = "SELECT * FROM Empl";

//        String url = "jdbc:mysql://localhost:3307/w3schools", "root", "root123";

        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3307/w3schools", "root", "root123")) {
            PreparedStatement preparedStatement = connection.prepareStatement(query);

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {

                System.out.println(resultSet.getInt(1) + " " + resultSet.getString(2));

            }
        }
    }
}
