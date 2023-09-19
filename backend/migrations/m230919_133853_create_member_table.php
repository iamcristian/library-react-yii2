<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%member}}`.
 */
class m230919_133853_create_member_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('member', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull(),
            'started_on' => $this->dateTime()->defaultValue(date('Y-m-d H:i:s')),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%member}}');
    }
}
