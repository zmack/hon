class Group < ActiveRecord::Base
  has_many :kanas

  def digraph?
    !( self.name =~ /digraph\Z/ ).nil?
  end
end
