script.Parent.Touched:Connect(function(otherPart)
       if otherPart.Parent:FindFirstChild("Humanoid") then
       local char = otherPart:Parent
       local player = game.Players:GetPlayerFromCharacter(char)

       local kill = Intance.new("Explosion", char)
       kill.Position = char:WaitForChild("HumanoidRootPart").Position

       player:kick("You have died, please restart")
       end
end)