CREATE TABLE user_info (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL
);

CREATE TABLE user_details (
    detail_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_info(user_id) ON DELETE CASCADE,
    bookmarks TEXT[],  -- Array to store multiple bookmarks
    favorites TEXT[],  -- Array to store multiple favorites
	notes TEXT[],  -- Array to store multiple notes
    total_score INT DEFAULT 0  -- Store the total score
);


