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
    blokiran boolean not null,
    createdAt date,
    updatedAt date
);
insert into korisnici values(1,'Petar','Petrovic','ppetar33','pera123','ppetar33@gmail.com','Lajkovacka Pruga','1234322342142','0602332531','frizer',false,'2002-06-11','2003-06-11');
insert into korisnici values(2,'Marko','Markovic','mmarko33','marko123','mmarko33@gmail.com','Jovana Ducica','1234322342232','060432531','admin',false,'2003-06-11','2004-06-11');
insert into korisnici values(3,'Jovan','Jovanovic','jjovan33','jovan123','jjovan33@gmail.com','Knez Mihailova','1234343242154','0602332531','clan',false,'2004-06-11','2005-06-11');

create table frizerskisalonpodaci(
	id int primary key,
    naziv varchar(20) not null,
    adresa varchar(20) not null,
	createdAt date,
    updatedAt date
);
insert into frizerskisalonpodaci values(1,'Friki','Mise Andrica','2002-06-11','2003-06-11');

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
    foreign key (clanID) references korisnici(id),
	createdAt date,
    updatedAt date
);
insert into termin values(1,'2021-12-12','12:30','13:30','potpun','zauzet',1,3,'2002-08-11','2004-06-11');
insert into termin values(2,'2021-12-14','09:30','13:30','potpun','zauzet',1,3,'2003-12-12','2005-06-11');
insert into termin values(3,'2021-12-16','14:30','15:30','potpun','zauzet',1,3,'2002-06-11','2008-06-11');
insert into termin values(4,'2021-12-18','11:30','13:30','potpun','zauzet',1,3,'20012-06-11','20014-06-11');