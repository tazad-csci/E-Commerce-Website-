



create table inventory(primary key int autoincrement partNumber, int onHand);


create table order(primary key int autoincrement orderNumber, foreign key (shippingNumber) references shippingInfo(shippingNumber), text creditAuth);

create table shippingInfo(primary key autoincrement int shippingNumber, text full_address, text full_name, )