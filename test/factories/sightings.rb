Factory.define :sighting do |s|
  s.association :user
  s.association :kana
  s.correct true
end
