class AddContentToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :content, :text
    add_column :messages, :image, :text
  end
end
