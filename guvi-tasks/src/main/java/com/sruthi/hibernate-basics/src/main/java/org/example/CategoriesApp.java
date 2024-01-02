package org.example;

import org.example.entity.Categories;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class CategoriesApp {

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

        Categories categories = new Categories();
        categories.setCategoryId(1);
        categories.setCategoryName("John");
        categories.setDescription("hello john");

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.save(categories);

        session.getTransaction().commit();
        session.close();
    }

    protected void read() {

        Session session = sessionFactory.openSession();

        int cid = 1;
        Categories categories = session.get(Categories.class, cid);

        System.out.println("CID: " + categories.getCategoryId());
        System.out.println("CategoryName: " + categories.getCategoryName());
        System.out.println("Description: " + categories.getDescription());

        session.close();
    }
    protected void update() {
        int idToBeUpdated = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var categories = session.get(Categories.class, idToBeUpdated);

        if(categories != null) {
            categories.setCategoryName("Dairy Products");
        }
        session.getTransaction().commit();
        session.close();

    }

    protected void delete() {

        int idToBeDeleted = 1;

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        var categories = session.get(Categories.class, idToBeDeleted);

        if(categories != null) {

            session.remove(categories);
        }
        session.getTransaction().commit();
        session.close();

    }
}