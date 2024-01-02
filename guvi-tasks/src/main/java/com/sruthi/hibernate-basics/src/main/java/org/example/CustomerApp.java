package org.example;

import org.example.entity.Book;
import org.example.entity.Customer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class CustomerApp {
    protected SessionFactory sessionFactory;

    protected void setup() {

        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure()
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

        Customer customer = new Customer();
        customer.setCustomerId(1);
        customer.setCustomerName("John");
        customer.setContactName("Joo");
        customer.setAddress("xyz");
        customer.setCity("Paris");
        customer.setPostalCode(6073);
        customer.setCountry("London");


        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.persist(customer);

        session.getTransaction().commit();
        session.close();
    }

    protected void read() {

        Session session = sessionFactory.openSession();

        int customerId = 1;
        Customer customer = session.get(Customer.class, customerId);

        System.out.println("CustomerId; " + customer.getCustomerId());
        System.out.println("CustomerName: " + customer.getCustomerName());
        System.out.println("ContactName: " + customer.getContactName());
        System.out.println("Address: " + customer.getAddress());
        System.out.println("City: " + customer.getCity());
        System.out.println("PostalCode: " + customer.getPostalCode());
        System.out.println("country: " + customer.getPostalCode());

        session.close();
    }

    protected void update() {
        int idToBeUpdated = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var customer = session.get(Customer.class, idToBeUpdated);

        if(customer != null) {
            customer.setAddress("Abc");
        }
        session.getTransaction().commit();
        session.close();

    }
    protected void delete() {

        int idToBeDeleted = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var customer = session.get(Customer.class, idToBeDeleted);

        if(customer != null) {

            session.remove(customer);
        }
        session.getTransaction().commit();
        session.close();

    }
}
