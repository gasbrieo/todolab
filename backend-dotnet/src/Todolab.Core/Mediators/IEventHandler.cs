using MediatR;

namespace TodoLab.Core.Mediators;

public interface IEventHandler<in TEvent> : INotificationHandler<TEvent> where TEvent : DomainEventBase;
