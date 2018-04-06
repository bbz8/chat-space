class AddGroupToMessages < ActiveRecord::Migration[5.1]
  def change
    add_reference :messages, :group, foreign_key: :true, index: true
  end
end
