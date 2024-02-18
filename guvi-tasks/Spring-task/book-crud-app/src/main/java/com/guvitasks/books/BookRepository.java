package com.guvitasks.books;

import org.springframework.data.repository.CrudRepository;


public interface BookRepository extends CrudRepository<Books,Integer> {
}
