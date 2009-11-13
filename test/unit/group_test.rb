require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  should "identify itself as a digraph if it is one" do
    g = Group.new(:name => "q digraph")
    assert g.digraph?
  end

  should "not identify itself as a digraph if it is not one" do
    g = Group.new(:name => "q")
    assert_equal false, g.digraph?
  end
end
