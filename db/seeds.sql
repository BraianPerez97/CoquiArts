INSERT INTO categories (name, description)
VALUES
('Graphic Design & Illustration', 'Visual arts and design'),
('Photography', 'Capturing moments through the lens'),
('Music & Jingles', 'Musical compositions and jingles'),
('Baked Goods', 'Delicious baked treats'),
('Muralist & Street Art', 'Street art and mural creation'),
('Social Media Content & Strategy', 'Content creation and social media strategy'),
('Event Services', 'Services for events and gatherings'),
('Other', 'Other creative services');


INSERT INTO user (first_name, last_name, email, passwd, json_path, cat_id)
VALUES
    ('Nashalys', 'Fernandez', 'nashalys@gmail.com', 'passwd1234', 'ABC123', 1),
    ('Braian', 'Perez', 'bapc@gmail.com', 'passwd456', 'ABC123', 2),
    ('David', 'Lee', 'david.lee@gmail.com', 'password789', 'MNO345', 3),
    ('Jane', 'Smith', 'jane.smith@gmail.com', 'pass123', 'DEF456', 4),
    ('Alice', 'Johnson', 'alice.j@gmail.com', 'password456', 'GHI789', 5),
    ('Bob', 'Williams', 'bob.w@gmail.com', 'pass789', 'GHI789', 6),
    ('Charlie', 'Brown', 'charlie.b@gmail.com', 'password123', 'JKL012', 7),
    ('Eva', 'Martinez', 'eva.m@gmail.com', 'pass456', 'JKL012', 8);