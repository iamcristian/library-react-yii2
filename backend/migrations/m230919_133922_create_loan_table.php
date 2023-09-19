<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%loan}}`.
 */
class m230919_133922_create_loan_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('loan', [
            'id' => $this->primaryKey(),
            'book_id' => $this->integer(),
            'borrower_id' => $this->integer(),
            'borrowed_on' => $this->dateTime()->defaultValue(date('Y-m-d H:i:s')),
            'to_be_returned_on' => $this->dateTime()
        ]);

        $this->createIndex(
            'idx-loan-book_id',
            'loan',
            'book_id'
        );
        
        $this->addForeignKey(
            'fk-loan-book_id',
            'loan',
            'book_id',
            'book',
            'id',
            'CASCADE'
        );

        $this->createIndex(
            'idx-loan-borrower_id',
            'loan',
            'borrower_id',
            'member',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('fk-loan-borrower_id', 'loan');
        $this->dropIndex('idx-loan-borrower_id', 'loan');
        $this->dropForeignKey('fk-loan-book_id', 'loan');
        $this->dropIndex('idx-loan-book_id', 'loan');
        $this->dropTable('loan');
    }
}
