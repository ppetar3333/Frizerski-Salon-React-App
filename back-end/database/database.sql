drop schema if exists frizerskisalon;
create schema frizerskisalon;

create table korisnici(
	id int primary key,
    ime varchar(20) not null,
    prezime varchar(20) not null,
    korisnickoIme varchar(20) not null,
    lozinka varchar(20) not null,
    email varchar(20) not null,
    adresa varchar(20) not null,
    jmbg varchar(13) not null,
    brojTelefona varchar(10) not null,
    tipKorisnika varchar(20) not null,
    blokiran boolean not null
);
insert into korisnici values(1,'Petar','Petrovic','ppetar33','pera123','ppetar33@gmail.com','Lajkovacka Pruga','1234322342142','0602332531','frizer',false);
insert into korisnici values(2,'Marko','Markovic','mmarko33','marko123','mmarko33@gmail.com','Jovana Ducica','1234322342232','060432531','admin',false);
insert into korisnici values(3,'Jovan','Jovanovic','jjovan33','jovan123','jjovan33@gmail.com','Knez Mihailova','1234343242154','0602332531','clan',false);

create table frizerskisalonpodaci(
	id int primary key,
    naziv varchar(20) not null,
    adresa varchar(20) not null
);
insert into frizerskisalonpodaci values(1,'Friki','Mise Andrica');

create table termin(
	id int primary key,
    datum varchar(30) not null,
    vremePocetka varchar(20) not null,
    vremeZavrsetka varchar(20) not null,
    tipTermina varchar(20) not null,
    statusTermina varchar(20) not null,
    frizerID int,
    foreign key (frizerID) references korisnici(id),
	clanID int,
    foreign key (clanID) references korisnici(id)
);
insert into termin values(1,'2021-12-12','12:30','13:30','potpun','zauzet',1,3);
insert into termin values(2,'2021-12-14','09:30','13:30','potpun','zauzet',1,3);
insert into termin values(3,'2021-12-16','14:30','15:30','potpun','zauzet',1,3);
insert into termin values(4,'2021-12-18','11:30','13:30','potpun','zauzet',1,3);