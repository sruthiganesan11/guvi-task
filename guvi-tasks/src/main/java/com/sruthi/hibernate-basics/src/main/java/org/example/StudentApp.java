package org.example;

import org.example.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class StudentApp {
    protected SessionFactory sessionFactory;

    protected void setup() {
        // code to load Hibernate Session factory

        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure() // configures settings from hibernate.cfg.xml
                .build();
        try {
            sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
        } catch (Exception ex) {
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }

    protected void exit() {
        sessionFactory.close();

    }

    protected void insert() {

        Student student = new Student();
        student.setId(1);
        student.setName("Joshua Bloch");
        student.setAge(32);

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.persist(student);

        session.getTransaction().commit();
        session.close();
    }

    protected void read() {
        // code to get a book
        Session session = sessionFactory.openSession();

        int id = 1;
        Student student = session.get(Student.class, id);

        System.out.println("ID: " + student.getId());
        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());

        session.close();
    }

    protected void update() {
        int idToBeUpdated = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var student = session.get(Student.class, idToBeUpdated);

        if(student != null) {
            student.setAge(18);
        }
        session.getTransaction().commit();
        session.close();

    }
    protected void delete() {

        int idToBeDeleted = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var student = session.get(Student.class, idToBeDeleted);

        if(student != null) {

            session.remove(student);
        }
        session.getTransaction().commit();
        session.close();

    }
}
