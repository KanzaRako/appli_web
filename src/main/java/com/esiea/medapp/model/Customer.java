package com.esiea.medapp.model;

import javax.persistence.*;

@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String prenom;
    @Column
    private String nom;
    @Column
    private String ville;
    @Column
    private int age;
    @Column
    private String pseudo;
    @Column
    private String password;

    public void setId(long id) {
        this.id = id;
    }
    public long getId() {
        return this.id;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    public String getPrenom() {
        return this.prenom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getNom() {
        return this.nom;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }
    public String getVille() {
        return this.ville;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return this.age;
    }

    public void setPseudo(String pseudo) {this.pseudo = pseudo; }
    public String getPseudo() {
        return this.pseudo;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return this.password;
    }

    protected Customer() {}

    public Customer(String prenom, String nom, String ville, int age, String pseudo, String password) {
        this.prenom = prenom;
        this.nom = nom;
        this.ville = ville;
        this.age = age;
        this.pseudo = pseudo;
        this.password = password;
    }

    public String toString() {
        return String.format("id=%d, prenom='%s', nom='%s', ville='%s', age=%d,pseudo='%s', password='%s'",
                id, prenom, nom, ville, age, pseudo,password);
    }
}
