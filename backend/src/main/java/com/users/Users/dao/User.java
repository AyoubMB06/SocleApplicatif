package com.users.Users.dao;

import javax.persistence.*;

@Entity
@Table(name = "USERS")
public class User {

    @Id
    @SequenceGenerator(
            name = "userSequenceIncrementation",
            sequenceName = "user_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "userSequenceIncrementation"
    )
    private Integer id;

    @Column(name = "Nom")
    private String Nom;

    @Column(name = "Prenom")
    private String Prenom;

    @Column(name = "Job")
    private String Job;

    public User(int id, String nom, String prenom, String job) {
        this.id = id;
        this.Nom = nom;
        this.Prenom = prenom;
        this.Job = job;
    }

    public User() {

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public String getJob() {
        return Job;
    }

    public void setJob(String job) {
        Job = job;
    }


}