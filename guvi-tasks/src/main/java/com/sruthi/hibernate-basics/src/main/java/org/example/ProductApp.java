package org.example;

import org.example.entity.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class ProductApp {
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

        Product product = new Product();
        product.setUnit(2);
        product.setPrice(80.5f);
        product.setProductName("John");

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.persist(product);

        session.getTransaction().commit();
        session.close();
    }

    protected void read() {

        Session session = sessionFactory.openSession();

        int pid = 1;
        Product product = session.get(Product.class, pid);

        System.out.println("PID: " +product.getPid());
        System.out.println("ProductName: " + product.getProductName());
        System.out.println("Price: " + product.getPrice());
        System.out.println("Unit: " + product.getUnit());

        session.close();
    }

    protected void update() {
        int idToBeUpdated = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var product1 = session.get(Product.class, idToBeUpdated);

        if(product1 != null) {
            product1.setProductName("Milk");
        }
        session.getTransaction().commit();
        session.close();

    }

    protected void delete() {

        int idToBeDeleted = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var product1 = session.get(Product.class, idToBeDeleted);

        if(product1 != null) {

            session.remove(product1);
        }
        session.getTransaction().commit();
        session.close();

    }
}
