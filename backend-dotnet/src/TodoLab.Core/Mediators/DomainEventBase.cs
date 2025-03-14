﻿using MediatR;

namespace TodoLab.Core.Mediators;

public abstract class DomainEventBase : INotification
{
    public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
}