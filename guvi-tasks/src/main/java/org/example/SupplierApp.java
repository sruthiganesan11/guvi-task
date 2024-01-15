package org.example;

import org.example.entity.Book;
import org.example.entity.Supplier;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class SupplierApp {
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

        Supplier supplier = new Supplier();

        supplier.setSupplierId(1);
        supplier.setSupplierName("Peter");
        supplier.setContactName("Pete");
        supplier.setAddress("abc efg");
        supplier.setCity("Paris");
        supplier.setPostalCode(457);
        supplier.setCountry("London");

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.save(supplier);

        session.getTransaction().commit();
        session.close();
    }

    protected void read() {

        Session session = sessionFactory.openSession();

        int supplierId = 1;
        Supplier supplier = session.get(Supplier.class, supplierId);

        System.out.println("SupplierId; " + supplier.getSupplierId());
        System.out.println("SupplierName: " + supplier.getSupplierName());
        System.out.println("ContactName: " + supplier.getContactName());
        System.out.println("Address: " + supplier.getAddress());
        System.out.println("City: " + supplier.getCity());
        System.out.println("PostalCode: " + supplier.getPostalCode());
        System.out.println("country: " + supplier.getCountry());

        session.close();
    }
    protected void update() {
        int idToBeUpdated = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var supplier = session.get(Supplier.class, idToBeUpdated);

        if(supplier != null) {
            supplier.setSupplierName("peter");
        }
        session.getTransaction().commit();
        session.close();

    }

    protected void delete() {

        int idToBeDeleted = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var supplier = session.get(Supplier.class, idToBeDeleted);

        if(supplier != null) {

            session.remove(supplier);
        }
        session.getTransaction().commit();
        session.close();

    }
}
