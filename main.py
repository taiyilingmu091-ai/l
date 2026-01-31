def on_on_chat():
    while agent.inspect_block(DOWN) != GOLD_BLOCK:
        if agent.inspect_block(DOWN) == DIAMOND_BLOCK:
            agent.turn(LEFT_TURN)
            agent.move(FORWARD, 1)
            agent.set_item(RED_WOOL, 64, 1)
            agent.set_slot(1)
            agent.destroy(DOWN)
            agent.place(DOWN)
            if agent.inspect_block(DOWN) == DIAMOND_BLOCK:
                agent.move(FORWARD, 1)
        else:
            agent.move(FORWARD, 1)
            if agent.inspect_block(DOWN) == EMERALD_BLOCK:
                agent.turn(RIGHT_TURN)
                agent.move(FORWARD, 1)
            if not (agent.inspect_block(DOWN) == GOLD_BLOCK or (agent.inspect_block(DOWN) == DIAMOND_BLOCK or (agent.inspect_block(DOWN) == EMERALD_BLOCK or (agent.inspect_block(DOWN) == SANDSTONE_STAIRS or agent.inspect_block(DOWN) == BRICKS)))):
                agent.set_item(RED_WOOL, 64, 1)
                agent.set_slot(1)
                agent.destroy(DOWN)
                agent.place(DOWN)
player.on_chat("start", on_on_chat)
