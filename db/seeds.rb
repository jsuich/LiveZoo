require 'faker'

# create a few users
User.create :name => 'Dev Bootcamp Student', :email => 'me@example.com', :password => 'password'
5.times do
  User.create :name => Faker::Name.name, :email => Faker::Internet.email, :password => 'password'
end

# create a few technical skills
computer_skills = %w(Ruby Sinatra Rails JavaScript jQuery HTML CSS)
computer_skills.each do |skill|
  Skill.create :name => skill, :context => 'technical'
end

# create a few creative skills
design_skills = %w(Photoshop Illustrator Responsive-Design)
design_skills.each do |skill|
  Skill.create :name => skill, :context => 'creative'
end

# TODO: create associations between users and skills
Proficiency.create :experience => 3, :education => "technical", :user_id => 1, :skill_id => 1

Proficiency.create :experience => 4, :education => "technical", :user_id => 1, :skill_id => 2

Proficiency.create :experience => 2, :education => "creative", :user_id => 1, :skill_id => 3

Proficiency.create :experience => 5, :education => "technical", :user_id => 1, :skill_id => 4

Proficiency.create :experience => 5, :education => "creative", :user_id => 1, :skill_id => 5

Proficiency.create :experience => 5, :education => "technical", :user_id => 1, :skill_id => 6

Proficiency.create :experience => 5, :education => "creative", :user_id => 1, :skill_id => 7

