"""empty message

Revision ID: b674af95db62
Revises: b61aadde3ae2
Create Date: 2022-02-16 12:15:33.106778

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b674af95db62'
down_revision = 'b61aadde3ae2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('account', sa.Column('password', sa.VARCHAR(), nullable=False))
    op.drop_column('account', '_password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('account', sa.Column('_password', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.drop_column('account', 'password')
    # ### end Alembic commands ###