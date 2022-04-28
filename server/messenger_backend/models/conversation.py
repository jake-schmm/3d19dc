from django.db import models
from django.db.models import Q

from . import utils
from .user import User
import operator 
from functools import reduce

class Conversation(utils.CustomModel):

    user = models.ManyToManyField(User, on_delete=models.CASCADE)

    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)

    # find conversation given multiple user Ids
    def find_conversation(userIds):
        # return conversation or None if it doesn't exist
        users = []
        for userId in userIds:
            users.append(User.get_by_id(userId))
        try:
                convos = []
                for user in users:
                    convosThatIncludeUser = user.conversation_set.all()
                    convos.append(convosThatIncludeUser)
                intersect = set.intersection(*map(set,convos))
                return intersect
        except Conversation.DoesNotExist:
            return None
