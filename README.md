## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|
|email|integer|null: false, unique: true|

### Association
- has_meny :members
- has_many :messages
- has_meny :groups, :throgh => :members

## messeagesテーブル

|Column|Type|Options|
|------|----|-------|
|comments|text| |
|image|binary| |
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members
- has_many :messages
- has_meny :users, :throgh => :members
