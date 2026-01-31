let ゴールまであと = 0
player.onChat("start", function () {
    ゴールまであと = 182
    agent.teleport(world(41, 2, 86), EAST)
    while (agent.inspectBlock(DOWN) != GOLD_BLOCK) {
        player.tell(mobs.target(LOCAL_PLAYER), ゴールまであと)
        if (agent.inspectBlock(DOWN) == DIAMOND_BLOCK) {
            agent.turn(LEFT_TURN)
            agent.move(FORWARD, 1)
            ゴールまであと += -1
            agent.setItem(RED_WOOL, 64, 1)
            agent.setSlot(1)
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (agent.inspectBlock(DOWN) == DIAMOND_BLOCK) {
                agent.move(FORWARD, 1)
                ゴールまであと += -1
            }
        } else {
            agent.move(FORWARD, 1)
            ゴールまであと += -1
            if (agent.inspectBlock(DOWN) == EMERALD_BLOCK) {
                agent.turn(RIGHT_TURN)
                agent.move(FORWARD, 1)
                ゴールまであと += -1
            }
            if (!(agent.inspectBlock(DOWN) == GOLD_BLOCK || (agent.inspectBlock(DOWN) == DIAMOND_BLOCK || (agent.inspectBlock(DOWN) == EMERALD_BLOCK || (agent.inspectBlock(DOWN) == SANDSTONE_STAIRS || agent.inspectBlock(DOWN) == BRICKS))))) {
                agent.setItem(RED_WOOL, 64, 1)
                agent.setSlot(1)
                agent.destroy(DOWN)
                agent.place(DOWN)
            }
        }
    }
    player.tell(mobs.target(LOCAL_PLAYER), "finish")
})
